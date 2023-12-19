import './Button.css'
export default function Button({ text, ...props }) {
    return <button className='commonButton'>{text}</button>
}