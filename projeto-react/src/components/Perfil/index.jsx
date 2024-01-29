import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) = props;
    return () => {
    const { enderco, nome } = props;
    return (
        <header className={styles.header}>
            <img class name={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )
}

export default Perfil;