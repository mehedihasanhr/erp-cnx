export default function Error({ message }: { message: string }) {
    return (
        <div>
            <p className="text-sm text-red-600">{message}</p>
        </div>
    );
}
