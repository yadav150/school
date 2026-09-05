/* ============================================================
   STANDARD TABLE SYSTEM – Scrollable, Fixed Layout, Separators
   ============================================================ */

/* 1. Pura page – horizontal scroll band */
body,
.main-content,
.page-container {
    overflow-x: hidden;
    max-width: 100%;
}

/* 2. Table Wrapper – scroll only here */
.table-wrapper {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;  /* smooth scroll on iOS */
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    background: white;
}

/* 3. Base Table – clean, responsive */
.data-table {
    width: 100%;
    min-width: 800px;            /* <-- ensures horizontal scroll on small screens */
    border-collapse: collapse;
    font-size: 0.875rem;
    margin-bottom: 0;
}

/* 4. Header – distinct with separators */
.data-table thead th {
    background: var(--gray-100);
    text-align: left;
    padding: 0.75rem 1rem;
    font-weight: 600;
    color: var(--gray-700);
    border-bottom: 2px solid var(--gray-300);
    border-right: 1px solid var(--gray-200);
    white-space: nowrap;
}
.data-table thead th:last-child {
    border-right: none;
}

/* 5. Data cells – row & column lines */
.data-table td {
    padding: 0.6rem 1rem;
    border-bottom: 1px solid var(--gray-200);
    border-right: 1px solid var(--gray-100);
    vertical-align: middle;
    white-space: nowrap;
}
.data-table td:last-child {
    border-right: none;
}

/* 6. Row hover + zebra striping */
.data-table tbody tr:hover {
    background: var(--gray-50);
}
.data-table tbody tr:nth-child(even) {
    background: #fafcfc;
}
.data-table tbody tr:nth-child(even):hover {
    background: var(--gray-50);
}

/* 7. Action buttons – inline */
.data-table .actions-cell {
    display: flex;
    gap: 0.5rem;
    flex-wrap: nowrap;
}

/* 8. Status badges – already global, but ensure */
.data-table .status-badge {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: capitalize;
}

/* 9. Mobile adjustments – compact, but scroll remains */
@media (max-width: 768px) {
    .data-table th,
    .data-table td {
        padding: 0.4rem 0.6rem;
        font-size: 0.75rem;
        white-space: nowrap;   /* important – ensures scroll triggers */
    }
    .data-table thead th {
        padding: 0.5rem 0.6rem;
    }
}

@media (max-width: 480px) {
    .data-table th,
    .data-table td {
        padding: 0.3rem 0.4rem;
        font-size: 0.65rem;
    }
}
