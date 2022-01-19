export const Header = (props => {
    return(
        <article>
                <h1>{(props.pagetitle) ? props.pagetitle : 'My Hook Project'}</h1>
        </article>
    )
})