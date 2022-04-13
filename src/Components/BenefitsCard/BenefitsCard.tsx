import style from "./BenefitsCard.module.scss"

export default function BenefitsCard(props:any) {
    return (
        <div className={style.container} style={props.style}>
            <img src={props.icon} alt={props.icon} />
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}
