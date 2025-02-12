import clsx from "clsx";

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'>;

export default function Textarea({ children, className, ...restProps }: TextareaProps) {
    return (
        <textarea 
            className={clsx("px-3 py-1 block rounded-md border border-gray-200 resize-none w-full", className)}
            {...restProps}
        ></textarea>
    )
}