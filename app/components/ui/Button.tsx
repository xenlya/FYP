type ButtonProps = {
    text : string;
    onClick ?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "danger" | "success";
    disabled?: boolean;
};

export default function Button({ text, onClick, type = "button", variant = "primary", disabled = false }: ButtonProps) {
    let buttonColor = "w-full rounded py-2 text-white transition disabled:cursor-not-allowed";

    switch (variant) {
        case "primary":
            buttonColor += " bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500";
            break;
        case "danger":
            buttonColor += " bg-red-600 hover:bg-red-700 disabled:bg-gray-500";
            break;
        case "success":
            buttonColor += " bg-green-600 hover:bg-green-700 disabled:bg-gray-500";
            break;
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            
            className={`
                w-full
                rounded
                py-2
                text-white
                transition
                ${buttonColor}
                disabled:bg-gray-500
                disabled:cursor-not-allowed
            `}
        >
            {text}
        </button>
    );
}