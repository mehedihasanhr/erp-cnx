import { Icon } from '@/assets/Icon/Icon';
import Image from 'next/image';
import React from 'react';

export default function MainDashboard() {
    const [filename, setFilename] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');
    const messageEndRef = React.useRef<HTMLDivElement | null>(null);
    const sendByMe = [
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
        true,
        false,
    ];
    // const sendByMe = false;

    // always scroll to the last message
    React.useEffect(() => {
        messageEndRef.current?.scrollIntoView();
    }, []);

    // handle the message form submission
    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(message);
    };

    console.log(message);

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMessage(value);
    };

    return (
        <section className="px-8 py-4">
            {/* bg color #e4e6eb */}
            <div className="">dashboard</div>

            {/* all chat things goes here */}
            <div className="hidden border rounded-t-lg shadow-2xl bg-white fixed bottom-0 right-[400px] w-[330px] h-[450px] overflow-y-scroll cnx__message_scrollbar">
                <div className="mx-4">
                    {/* chat header  */}
                    <div className="flex sticky top-0 bg-white justify-between items-center border-b py-2 mb-1">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Image
                                    className="h-[35px] w-[35px] rounded-full"
                                    src="/joy.jpg"
                                    alt="img"
                                    height={40}
                                    width={40}
                                />
                                <span className="h-3.5 w-3.5 border-2 border-white rounded-full bottom-0 right-0 bg-green-600 absolute"></span>
                            </div>
                            <div>
                                <h4 className="text-base font-medium">Md Mehedi Hasan</h4>
                                <p className="text-xs text-gray-500">Active now</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="p-1 cursor-pointer">
                                <Icon icon="minus" className="h-6 w-6" />
                            </div>
                            <div className="p-1 cursor-pointer">
                                <Icon icon="cross" className="h-6 w-6" />
                            </div>
                        </div>
                    </div>

                    {/* messages section */}
                    <div className="mb-16 bg-white">
                        {/* single message  */}
                        {sendByMe.map((m, index) => (
                            <div key={index} className={`flex mb-2 ${m ? 'justify-end ' : 'justify-start'}`}>
                                <div
                                    className={`w-[230px] overflow-x-hidden bg-green-400 rounded-t-lg ${
                                        m ? 'rounded-bl-lg' : 'rounded-br-lg'
                                    }`}
                                >
                                    <p className="py-1 px-2.5 text-sm">
                                        Hello Joy dsfffffff fdfffff jlkasdfj alskdfjlakf alsdfjalkf
                                    </p>
                                </div>
                            </div>
                        ))}
                        {/* <div className={`flex mb-1 ${sendByMe ? 'justify-end ' : 'justify-start'}`}>
                            <div
                                className={`w-[230px] overflow-x-hidden bg-green-400 rounded-t-lg ${
                                    sendByMe ? 'rounded-bl-lg' : 'rounded-br-lg'
                                }`}
                            >
                                <p className="py-0.5 px-2">
                                    Hello Joy dsfffffff fdfffff jlkasdfj alskdfjlakf alsdfjalkf
                                </p>
                            </div>
                        </div> */}

                        <div ref={messageEndRef}></div>
                    </div>

                    {/* footer section to write message and send  */}
                    <div className="fixed bottom-0 right-[400px] w-[330px]">
                        <div className="flex justify-between items-center bg-white w-full px-2 border-l border-r py-3">
                            <div className="p-1 cursor-pointer relative">
                                <label htmlFor="file-input">
                                    <Icon icon="clip" className="h-5 w-5 fill-[#009965] cursor-pointer" />
                                </label>
                                <input
                                    onChange={(e) => setFilename(e.target.value)}
                                    className="hidden"
                                    type="file"
                                    name="file-input"
                                    id="file-input"
                                />
                                <span
                                    className={`py-1 px-2 max-w-[300px] overflow-hidden absolute bottom-full left-0 mb-1 bg-fuchsia-600 rounded-t-xl rounded-br-xl ${
                                        filename ? 'block' : 'hidden'
                                    }`}
                                >
                                    {filename}
                                </span>
                            </div>
                            <form className="flex items-center gap-1" onSubmit={handleSendMessage}>
                                {/* message input div */}

                                <input
                                    id="message"
                                    name="message"
                                    type="text"
                                    value={message}
                                    onChange={handleMessageChange}
                                    className="border w-[240px] px-3 py-1.5 text-sm outline-none rounded-full "
                                    placeholder="Message"
                                />

                                {/* send message icon  */}
                                <div className="p-1 cursor-pointer">
                                    <label htmlFor="submit">
                                        <Icon icon="send" className="h-7 w-7 fill-[#009965]" />
                                    </label>
                                    <input className="hidden" type="submit" id="submit" value="" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
