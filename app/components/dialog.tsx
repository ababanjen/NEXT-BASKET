import { ReactNode, useEffect, useState } from "react"
import Close from "./icons/close"
const Dialog = ({ children, show }: { children: ReactNode, show: boolean }) => {
  const [showDialog, setShowDialog] = useState<boolean>(show)


  useEffect(() => {
    setShowDialog(show)
  }, [show])

  if (!showDialog) return

  const closeDialog = () =>
    setShowDialog(false)
  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {children}
              {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <div className="flex justify-between w-full">
                      <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Successfully added to the basket</h3>
                      <span className="cursor-pointer" onClick={closeDialog}>
                        <Close />
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <div className="flex flex-col gap-4">
                        <span className="text-sm text-gray-500">Prod title</span>
                        <span className="text-sm text-gray-500">Prod price</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dialog