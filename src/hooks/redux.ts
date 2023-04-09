import { AppDispatch, RootState } from "../store/store"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"

export const useAppDispacth = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
