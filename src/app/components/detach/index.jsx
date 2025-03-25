import styles from "./detach.module.css";

const Detach = () => {
    return (
        <section className={styles.bookSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
                    <a href="/destaques" className={styles.viewAll}>
                        Ver todos
                    </a>
                </div>

                <div className={styles.booksGrid}>
                    {featuredBooks.map((book) => (
                        <div key={book.id} className={styles.bookCard}>
                            <div className={styles.bookCover}>
                                <img
                                    src={book.coverImage}
                                    alt={book.title}
                                    className={styles.coverImage}
                                />
                                <button className={styles.quickViewButton}>Visualizar</button>
                            </div>
                            <div className={styles.bookInfo}>
                                <h3 className={styles.bookTitle}>{book.title}</h3>
                                <p className={styles.bookAuthor}>por {book.author}</p>
                                <div className={styles.bookRating}>
                                    {renderStars(book.rating)}
                                    <span className={styles.ratingValue}>({book.rating})</span>
                                </div>
                                <div className={styles.bookTags}>
                                    {book.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.bookPriceActions}>
                                    <span className={styles.bookPrice}>
                                        R$ {book.price.toFixed(2)}
                                    </span>
                                    <div className={styles.bookActions}>
                                        <button className={styles.iconButton}>❤️</button>
                                        <button className={styles.iconButton}>🛒</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    );
};

export default Detach;