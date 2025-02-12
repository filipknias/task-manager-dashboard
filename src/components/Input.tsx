import clsx from "clsx";

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export default function Input({ children, className, ...restProps }: InputProps) {
    return (
        <input 
            className={clsx("px-3 py-1 block rounded-md border border-gray-200 w-full", className)}
            {...restProps}
        />
    )
}
