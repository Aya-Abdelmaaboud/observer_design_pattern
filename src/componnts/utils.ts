import { Observable } from '../utils/observable';
import { ToastProps } from './Toast';

type ToastEvent = Pick<ToastProps, 'id' | 'variant' | 'message'>;

 export const observable = new Observable<{ type:"ADD_TOAST",
  toast:ToastEvent} |{type:"REMOVE_TOAST"}>();

export function toast(message: string) {
  observable.notify({ type:"ADD_TOAST",toast: {id:Date.now(), message} });
}

toast.success = (message: string) => {
  observable.notify({ type:"ADD_TOAST",toast: {id:Date.now(), message,variant: 'success'} });
};

toast.error = (message: string) => {
  observable.notify({ type:"ADD_TOAST",toast: {id:Date.now(), message,variant: 'error'} });
};

toast.dismissAll=()=>{
  observable.notify({ type:"REMOVE_TOAST" });
}