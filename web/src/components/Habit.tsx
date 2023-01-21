interface IPropsHabit {
    completed: number
}
export function Habit({ completed}:IPropsHabit){
    return <p>{completed}</p>
}