export type reducerStateType = {
    value: number
    min: number
    max: number
    settingMode: boolean
}
const initState = {
    value: 0,
    min: 0,
    max: 5,
    settingMode: true
}
type AddCountAT = ReturnType<typeof AddCount>
type ResetCountAT = ReturnType<typeof ResetCount>
type SetSettingMinValueAT = ReturnType<typeof SetSettingMinValue>
type SetSettingMaxValueAT = ReturnType<typeof SetSettingMaxValue>
type ChangeSettingModeAT = ReturnType<typeof ChangeSettingMode>
type UnionActionTypes = AddCountAT | SetSettingMinValueAT | SetSettingMaxValueAT | ResetCountAT | ChangeSettingModeAT
export const counterReducer = (state: reducerStateType = initState, action: UnionActionTypes): reducerStateType => {
    switch (action.type) {
        case "ADD-COUNT":
            return {...state, value: state.value + 1}
        case "SET-SETTING-MIN-VALUE":
            return {...state, min: action.min}
        case "SET-SETTING-MAX-VALUE":
            return {...state, max: action.max}
        case "RESET-COUNT":
            return {...state, value: state.min}
        case "CHANGE-SETTING-MODE":
            return {...state, settingMode: action.value}
        default:
            return state
    }
}
export const AddCount = () => ({type: "ADD-COUNT"} as const)
export const ResetCount = () => ({type: "RESET-COUNT"} as const)
export const SetSettingMinValue = (min: number) => ({type: "SET-SETTING-MIN-VALUE", min} as const)
export const SetSettingMaxValue = (max: number) => ({type: "SET-SETTING-MAX-VALUE", max} as const)
export const ChangeSettingMode = (value: boolean) => ({type: "CHANGE-SETTING-MODE", value} as const)

