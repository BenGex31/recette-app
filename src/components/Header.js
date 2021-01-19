import React from 'react'

const Header = ({ pseudo }) => {
    const formatPSeudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    console.log(formatPSeudo(pseudo));

    return(
        <header>
            <h1>La boîte à recette de {formatPSeudo(pseudo)}</h1>
        </header>
    )
}

export default Header