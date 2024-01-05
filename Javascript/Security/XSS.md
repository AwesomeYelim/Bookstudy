# XSS 공격 을 고려한 웹개발

<https://ui.toast.com/weekly-pick/ko_2021124>

```jsx
import DOMPurify from "dompurify";

// ...

<div className="text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(metaCharacters(item)) }} />;
```

```jsx
import DOMPurify from "dompurify";

// ...

useEffect(() => {
  if (nameRef.current) {
    const highlightedHTML = DOMPurify.sanitize(highlight({ target: item.hostName, searchText }));
    nameRef.current.innerHTML = highlightedHTML;
  }
}, [searchText, item]);
```
