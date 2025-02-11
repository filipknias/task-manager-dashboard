import clsx from "clsx";

type StandaloneIconButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    children: React.ReactNode;
};

export default function StandaloneIconButton({ children, className, ...restProps }: StandaloneIconButtonProps) {
    return (
        <button 
            className={clsx("py-1 px-3 rounded-md transition duration-150 flex items-center justify-center cursor-pointer", className)}
            {...restProps}
        >
            {children}
        </button>
    )
}
