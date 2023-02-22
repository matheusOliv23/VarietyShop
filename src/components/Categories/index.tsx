import CategoryItem from "../CategoryItem"

interface CategoryProps {
  img: string
  title: string
  route: string
}

interface ICategory {
  category: CategoryProps[]
}

export default function Categories({ category }: ICategory) {
  return (
    <div className="flex gap-16 justify-center mt-20 mb-28 md:mt-48 md:mb-40 md:gap-2.5 lg:gap-7 items-center md:flex-row flex-col">
      {category.map((item, index) => (
        <CategoryItem
          key={index}
          img={item.img}
          route={item.route}
          title={item.title}
        />
      ))}
    </div>
  )
}
