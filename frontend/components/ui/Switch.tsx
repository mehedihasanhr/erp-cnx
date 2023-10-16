import { Switch } from '@headlessui/react';

const Toggle = ({ enabled, setEnabled }: { enabled: boolean; setEnabled: any }) => {
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-[#009965]' : 'bg-gray-200'}
          relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    );
};

export default Toggle;
