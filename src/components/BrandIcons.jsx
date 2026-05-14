export const GitHub = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-github ${className}`}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export const LinkedIn = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-linkedin ${className}`}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export const LeetCode = ({ size = 24, className = "" }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" stroke="none" className={className}>
        <title>LeetCode</title>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c1.472-1.472 1.472-3.858 0-5.32c-.067-.067-.14-.131-.215-.192l-4.78-3.08-4.747-3.047a2.029 2.029 0 0 1-.954-1.748 2.032 2.032 0 0 1 1.705-1.92h7.828a2.03 2.03 0 0 0 2.03-2.03V3.714a2.03 2.03 0 0 0-2.03-2.03h-10.22zM16.48 11.8c.846 0 1.533.687 1.533 1.533 0 .846-.687 1.533-1.533 1.533H8.388c-.846 0-1.533-.687-1.533-1.533 0-.846.687-1.533 1.533-1.533h8.092z" />
    </svg>
);

export const HackerRank = ({ size = 24, className = "" }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" stroke="none" className={className}>
        <title>HackerRank</title>
        <path d="M11.986 0L0 6.915v10.163L11.986 24 24 17.078V6.915L11.986 0zm-1.841 17.511l-3.359-1.939v-7.14l3.359-1.939v11.018zm3.682 0v-11.018l3.359 1.939v7.14l-3.359 1.939zM12 14.887c-1.583 0-2.868-1.285-2.868-2.868S10.417 9.15 12 9.15c1.583 0 2.868 1.285 2.868 2.868S13.583 14.887 12 14.887z" />
    </svg>
);
