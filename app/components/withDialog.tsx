/* eslint-disable react/display-name */
import { useState } from "react"
import Dialog from "./dialog"
import DialogContentAddItem from "./DialogContentAddItem"
import DefaultDialogContent from "./DefaultDialogContent"

const withDialog = (Component: any) => {
  return (props: any) => {
    const [show, setShow] = useState<boolean>(false)
    const setShowDialog = (val: boolean) => setShow(val)

    return (
      <div className="relative">
        <Dialog show={show}>
          <DialogContentAddItem onClose={() => setShow(false)} />
        </Dialog>
        <Component {...props} setShowDialog={setShowDialog} />
      </div>
    )
  }
}

export type withDialogTypes = {
  setShowDialog?: (val: boolean) => void
  show?: boolean
}

export default withDialog