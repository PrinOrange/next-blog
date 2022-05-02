import { useRouter } from "next/router"
import Reader from 'md-editor-rt'
const Docs = () => {
    const router = useRouter()
    const { docId } = router.query

    return (<p>Post: {docId}</p>)
}

export default Docs;