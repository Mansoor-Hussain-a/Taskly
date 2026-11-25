import { useState, type ReactElement } from "react";

function Categories(): ReactElement {
  const categoriesList: string[] = ["All", "Work", "Personal", "Health"];
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  function handleCategories(categoryClicked: string) {
    setCurrentCategory(categoryClicked);
  }

  return (
    <div className="flex gap-5">
      {categoriesList.map((item: string, index: number): ReactElement => {
        return (
          <span
            key={index}
            className={` rounded-lg py-1 px-2 ${item === currentCategory ? "bg-primary-glow" : "bg-primary"} cursor-pointer select-none`}
            onClick={() => {
              handleCategories(item);
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
export default Categories;
