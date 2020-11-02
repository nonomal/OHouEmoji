import CodebookInteface from './CodebookInterface'

export function FoodCodebook() {
    const tag = "🍋"
    const scale = 7
    const encryptCodebook: Map<String, Array<String>> = new Map([
        ['0', ['🍏', '🍎', '🍐', '🍊', '🍌', '🍉', '🍇']],
        ['1', ['🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥']],
        ['2', ['🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒']],
        ['3', ['🌶', '🌽', '🥕', '🧄', '🧅', '🥔', '🍠']],
        ['4', ['🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚']],
        ['5', ['🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗']],
        ['6', ['🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🥪']],
        ['7', ['🥙', '🧆', '🌮', '🌯', '🥗', '🥘', '🥫']],
        ['8', ['🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟']],
        ['9', ['🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠']],
        ['A', ['🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧']],
        ['B', ['🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫']],
        ['C', ['🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛']],
        ['D', ['🍼', '☕️', '🍵', '🧃', '🥤', '🍶', '🍺']],
        ['E', ['🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉']],
        ['F', ['🍾', '🧊', '🍴', '🍽', '🥣', '🥢', '🧂']],
    ])

    const decryptCodebook: Map<String, String> = new Map([
        ['🍇', '0'],
        ['🥥', '1'],
        ['🥒', '2'],
        ['🍠', '3'],
        ['🥚', '4'],
        ['🍗', '5'],
        ['🥪', '6'],
        ['🥫', '7'],
        ['🥟', '8'],
        ['🥠', '9'],
        ['🥧', 'A'],
        ['🍫', 'B'],
        ['🥛', 'C'],
        ['🍺', 'D'],
        ['🧉', 'E'],
        ['🧂', 'F'],
        ['🍉', '0'],
        ['🍍', '1'],
        ['🥬', '2'],
        ['🥔', '3'],
        ['🧀', '4'],
        ['🥩', '5'],
        ['🍕', '6'],
        ['🥘', '7'],
        ['🍱', '8'],
        ['🍥', '9'],
        ['🍦', 'A'],
        ['🍬', 'B'],
        ['🍯', 'C'],
        ['🍶', 'D'],
        ['🍹', 'E'],
        ['🥢', 'F'],
        ['🍌', '0'],
        ['🥭', '1'],
        ['🥦', '2'],
        ['🧅', '3'],
        ['🥨', '4'],
        ['🥓', '5'],
        ['🍟', '6'],
        ['🥗', '7'],
        ['🍣', '8'],
        ['🍘', '9'],
        ['🍨', 'A'],
        ['🍭', 'B'],
        ['🥜', 'C'],
        ['🥤', 'D'],
        ['🍸', 'E'],
        ['🥣', 'F'],
        ['🍊', '0'],
        ['🍑', '1'],
        ['🥑', '2'],
        ['🧄', '3'],
        ['🥖', '4'],
        ['🧇', '5'],
        ['🍔', '6'],
        ['🌯', '7'],
        ['🍛', '8'],
        ['🍚', '9'],
        ['🍧', 'A'],
        ['🍮', 'B'],
        ['🌰', 'C'],
        ['🧃', 'D'],
        ['🥃', 'E'],
        ['🍽', 'F'],
        ['🍐', '0'],
        ['🍒', '1'],
        ['🍆', '2'],
        ['🥕', '3'],
        ['🍞', '4'],
        ['🥞', '5'],
        ['🌭', '6'],
        ['🌮', '7'],
        ['🍲', '8'],
        ['🍙', '9'],
        ['🍡', 'A'],
        ['🎂', 'B'],
        ['🍪', 'C'],
        ['🍵', 'D'],
        ['🍷', 'E'],
        ['🍴', 'F'],
        ['🍎', '0'],
        ['🍈', '1'],
        ['🍅', '2'],
        ['🌽', '3'],
        ['🥯', '4'],
        ['🧈', '5'],
        ['🦴', '6'],
        ['🧆', '7'],
        ['🍜', '8'],
        ['🍤', '9'],
        ['🍢', 'A'],
        ['🍰', 'B'],
        ['🍩', 'C'],
        ['☕️', 'D'],
        ['🥂', 'E'],
        ['🧊', 'F'],
        ['🍏', '0'],
        ['🍓', '1'],
        ['🥝', '2'],
        ['🌶', '3'],
        ['🥐', '4'],
        ['🍳', '5'],
        ['🍖', '6'],
        ['🥙', '7'],
        ['🍝', '8'],
        ['🦪', '9'],
        ['🥮', 'A'],
        ['🧁', 'B'],
        ['🍿', 'C'],
        ['🍼', 'D'],
        ['🍻', 'E'],
        ['🍾', 'F'],
    ])

    return {
        tag,
        scale,
        encryptCodebook,
        decryptCodebook
    } as CodebookInteface
}