import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
//UNICAMENTE RENOMBRAMOS Y TYPAMOS el useSelector para que no moleste TS y sepa que tipo de datos maneja nuestro estado