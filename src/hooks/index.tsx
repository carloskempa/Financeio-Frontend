
import { ToastProvider } from './toast'
import { ModalProvider } from './modal'


const AppProvider: React.FC = ({ children }) => {

    return (
        <ToastProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </ToastProvider>
    )

}

export { AppProvider }