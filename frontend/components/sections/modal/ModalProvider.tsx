import { ReactNode } from 'react';

export default function ModalProvider({ children }: { children: ReactNode }) {
    return (
        <div className="absolute cursor-default top-full right-0 cnx__user_dropdown shadow-lg">{children}</div>
        // <div className="absolute cursor-default top-full right-0 mt-10 group-hover:mt-0 group-hover:visible group-hover:opacity-100 opacity-0 invisible transition-all shadow-lg">
        //     {children}
        // </div>
    );
}
