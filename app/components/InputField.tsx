type InputFieldProps = {
    label: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
};

export default function InputField({ label, type = "text", placeholder, value, onChange }: InputFieldProps) {
    return (
        <div className="mb-4">
            <label className= "mb-2 block text-lg font-semibold">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
            />
        </div>
    );
}