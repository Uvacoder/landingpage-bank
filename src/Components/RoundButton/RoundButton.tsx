import style from "./RoundButton.module.scss"

export default function Button(props:any) {
    return (
        <div className={style.container} style={props.style}>
            <p className={style.text}>{props.children}</p>
        </div>
    )
}
