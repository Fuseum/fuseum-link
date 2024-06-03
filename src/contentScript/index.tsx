import { createRoot } from 'react-dom/client'
import InjectButton from './InjectButton'
const root = document.createElement('div')
root.id = 'content'
document.body.append(root)
createRoot(root).render(<InjectButton />)
