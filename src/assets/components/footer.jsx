function Footer() {
    let now = new Date();
    let year = now.getFullYear()

    return <footer>
        <p>Copyright {year}</p>
    </footer>
}
export default Footer;