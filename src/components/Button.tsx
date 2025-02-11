import clsx from "clsx";

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    children: React.ReactNode;
};

export default function Button({ children, className, ...restProps }: ButtonProps) {
    return (
        <button 
            className={clsx("px-3 py-2 transition duration-150 rounded-md text-white text-sm font-medium whitespace-nowrap cursor-pointer", className)}
            {...restProps}
        >
            {children}
        </button>
    )
}
