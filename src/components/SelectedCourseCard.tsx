import clsx from "clsx";
import { useRef } from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { BsFillTrashFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { Course, useCourseStore } from "../stores/course";

interface SelectedCourseCardProps {
  priority: number;
  course: Course;
  onDelete: () => void;
}

const SelectedCourseCard = ({
  priority,
  course: { title },
  onDelete,
}: SelectedCourseCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reorderPriority = useCourseStore((state) => state.reorderPriority);

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: "SelectedCourseCard",
    item: () => {
      return { index: priority - 1 };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop<{ index: number }, void>({
    accept: "SelectedCourseCard",
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index; // The index of the dragging item
      const hoverIndex = priority - 1; // The index of the hovering item

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get vertical middle position of the item
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Get mouse position
      const mousePositionY =
        (monitor.getClientOffset() as XYCoord).y - hoverBoundingRect.top;

      // Dragging downwards
      if (dragIndex < hoverIndex && mousePositionY < hoverMiddleY - 20) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && mousePositionY > hoverMiddleY + 20) {
        return;
      }

      // Reorder items
      reorderPriority(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  dragPreview(drop(ref));

  return (
    <article
      ref={ref}
      className={clsx(
        [isDragging && "opacity-0"],
        "flex items-center",
        "mb-[-2px] w-[25rem] px-2.5 py-3",
        "border-2 border-gray-600 bg-white"
      )}
    >
      <div ref={drag}>
        <HiMenuAlt4 className="cursor-pointer text-gray-500 hover:text-gray-400" />
      </div>
      <div className="flex flex-1">
        <span className="mx-4 h-6 w-6 rounded bg-gray-200 text-center">
          {priority}
        </span>
        <h3>{title}</h3>
      </div>
      <BsFillTrashFill
        className="cursor-pointer text-gray-500 hover:text-gray-400"
        onClick={onDelete}
        size={18}
      />
    </article>
  );
};

export default SelectedCourseCard;
