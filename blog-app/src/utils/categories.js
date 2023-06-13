const categories = [
    { value: 'Physical', label: 'Physical' },
    { value: 'Nutritional', label: 'Nutritional' },
    { value: 'Mental', label: 'Mental' },
];

const subCategories = {
    Physical: [
        { value: 'Exercises', label: 'Exercises' },
        { value: 'Workouts', label: 'Workouts' },
        { value: 'Routines', label: 'Routines' },
        { value: 'Recovery', label: 'Recovery' },
        { value: 'Science', label: 'Science' },
    ],
    Nutritional: [
        { value: 'Recipes', label: 'Recipes' },
        { value: 'Supplements', label: 'Supplements' },
        { value: 'BMR-Calculator', label: 'BMR Calculator' },
        { value: 'Macro-and-Calorie Calculator', label: 'Macro and Calorie Calculator' },
        { value: 'Meal-Plans', label: 'Meal Plans' },
        { value: 'Science', label: 'Science' },
    ],
    Mental: [
        { value: 'Mindset', label: 'Mindset' },
        { value: 'Philosophy', label: 'Philosophy' },
        { value: 'Motivation', label: 'Motivation' },
        { value: 'Mental-Exercises', label: 'Mental Exercises' },
    ],
}
export default categories
export { subCategories }