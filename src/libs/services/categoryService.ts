import Axios from 'axios'
import Category from 'libs/models/Category'

export const fetchCategories = async () => {
    const { data: categoriesData } = await Axios.get('http://localhost:1337/categories')

    console.log('categoriesData', categoriesData)
    return categoriesData.map((cat: any) => new Category(cat))
}
