

const blogCategories = [
    physical = [
        "Exercises",
        "Workouts",
        "Routines",
        "Recovery",
        "Science"
    ],
    mental = [
        "Mindset",
        "Philosophy",
        "Motivation",
        "Mental-Exercises"
    ],
    nutritional = [
        "Recipes",
        "Supplements",
        "BMR-Calculator",
        "Macro-and-Calorie-Calculator",
        "Meal-Plans",
        "Science",
    
    ]
]

class BlogCategory {
    static categories = blogCategories

    static validateBlogCategory(category) {
        blogCategories.forEach(cate => {
            if (cate.includes(category)){
                return true
            }
            else return false
        });
    }
    static getCategories() {
        return this.categories
    }
}

module.exports = BlogCategory
