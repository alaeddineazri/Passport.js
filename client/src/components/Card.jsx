import { Link } from "react-router-dom"

const Card = ({post}) => {
    return (
        <div className="card">
            <Link className="link" to={`/post/${post.id}`}>
            <div className="toCenter">
                <span className="title">{ post.title}</span>
            </div>
            <img src={ post.img} alt="" className="img" />
            <p className="desc">{post.desc}</p>
            <div className="toCenter">
                <button className="cardButton">Read More</button>
            </div>
            </Link>
        </div>
    )
}

export default Card
