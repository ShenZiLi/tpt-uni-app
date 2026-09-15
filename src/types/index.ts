export type ViewState = 'idle' | 'loading' | 'success' | 'empty' | 'error'
export interface Policy { id: string; name: string; type: string; insured: string; status: string; renewal: string; amount: string }
export interface TodoItem { id: string; label: string; title: string; action: string; path: string; tone: 'orange' | 'purple' | 'green' }
