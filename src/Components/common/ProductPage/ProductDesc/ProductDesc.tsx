import { FC } from "react"


type OwnProps = {
    name: string
    shortDesc: string
    features: Array<FeatureType>
}

type FeatureType = {
    name: string,
    value: string
}

const ProductsDesc: FC<OwnProps> = ({ name, shortDesc, features}) => {

    const shortFeatures = features.map((feature: FeatureType) => {
        return (
            <tr key={feature.name} className='features-item'>
                <td className='feature-first'>{feature.name}:</td>
                <td className='feature-last'>{feature.value}</td>
            </tr>
        )
    })

    return (
        <div className='product-desc'>
            <h2 className='product-name'>{name}</h2>
            <div className='product-short-info'>{shortDesc}</div>
            <div className='product-short-features-container'>
                <table className='product-short-features'>
                    <tbody>
                        { shortFeatures }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsDesc