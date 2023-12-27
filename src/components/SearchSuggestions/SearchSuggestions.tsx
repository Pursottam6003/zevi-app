import styles from "./SearchSuggestions.module.scss";

interface SearchSuggestionsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  isOpen,
  setIsOpen,
  children,
}: SearchSuggestionsProps) => {
  return (
    <div
      style={{ display: isOpen ? "block" : "none" }}
      className={styles.searchSuggestions}
    >
      <div
        onClick={() => setIsOpen(false)}
        className={styles.searchSuggestionOverlay}
      ></div>
      {isOpen && <div className={styles.searchSuggestionBox}>{children}</div>}
    </div>
  );
};

export default SearchSuggestions;
