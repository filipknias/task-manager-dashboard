import clsx from "clsx";

type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
    children: React.ReactNode;
};

export default function Select({ children, className, ...restProps }: SelectProps) {
    return (
        <select 
            className={clsx("px-3 py-1 rounded-md bg-white text-black text-sm font-medium border border-gray-200 whitespace-nowrap cursor-pointer", className)}
            {...restProps}
        >
            {children}
        </select>
    )
}
