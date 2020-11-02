import CodebookInteface from './CodebookInterface'

export function GestureCodebook() {
    const tag = "🤝"
    const scale = 12
    const encryptCodebook = new Map([
        ['0', ['🤲', '🤲🏻', '🤲🏼', '🤲🏽', '🤲🏾', '🤲🏿', '👐', '👐🏻', '👐🏼', '👐🏽', '👐🏾', '👐🏿']],
        ['1', ['🙌', '🙌🏻', '🙌🏼', '🙌🏽', '🙌🏾', '🙌🏿', '👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿']],
        ['2', ['👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿', '👎', '👎🏻', '👎🏼', '👎🏽', '👎🏾', '👎🏿']],
        ['3', ['👊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿']],
        ['4', ['🤛', '🤛🏻', '🤛🏼', '🤛🏽', '🤛🏾', '🤛🏿', '🤜', '🤜🏻', '🤜🏼', '🤜🏽', '🤜🏾', '🤜🏿']],
        ['5', ['🤞', '🤞🏻', '🤞🏼', '🤞🏽', '🤞🏾', '🤞🏿', '✌️', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿']],
        ['6', ['🤟', '🤟🏻', '🤟🏼', '🤟🏽', '🤟🏾', '🤟🏿', '🤘', '🤘🏻', '🤘🏼', '🤘🏽', '🤘🏾', '🤘🏿']],
        ['7', ['👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿', '🤏', '🤏🏻', '🤏🏼', '🤏🏽', '🤏🏾', '🤏🏿']],
        ['8', ['👈', '👈🏻', '👈🏼', '👈🏽', '👈🏾', '👈🏿', '👉', '👉🏻', '👉🏼', '👉🏽', '👉🏾', '👉🏿']],
        ['9', ['👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿', '👇', '👇🏻', '👇🏼', '👇🏽', '👇🏾', '👇🏿']],
        ['A', ['☝️', '☝🏻', '☝🏼', '☝🏽', '☝🏾', '☝🏿', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿']],
        ['B', ['🤚', '🤚🏻', '🤚🏼', '🤚🏽', '🤚🏾', '🤚🏿', '🖐', '🖐🏻', '🖐🏼', '🖐🏽', '🖐🏾', '🖐🏿']],
        ['C', ['🖖', '🖖🏻', '🖖🏼', '🖖🏽', '🖖🏾', '🖖🏿', '👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿']],
        ['D', ['🤙', '🤙🏻', '🤙🏼', '🤙🏽', '🤙🏾', '🤙🏿', '💪', '💪🏻', '💪🏼', '💪🏽', '💪🏾', '💪🏿']],
        ['E', ['🖕', '🖕🏻', '🖕🏼', '🖕🏽', '🖕🏾', '🖕🏿', '🙏', '🙏🏻', '🙏🏼', '🙏🏽', '🙏🏾', '🙏🏿']],
        ['F', ['✍️', '✍🏻', '✍🏼', '✍🏽', '✍🏾', '✍🏿', '🦶', '🦶🏻', '🦶🏼', '🦶🏽', '🦶🏾', '🦶🏿']]
    ])

    const decryptCodebook = new Map([
        ['👐🏿', '0'],
        ['👏🏿', '1'],
        ['👎🏿', '2'],
        ['✊🏿', '3'],
        ['🤜🏿', '4'],
        ['✌🏿', '5'],
        ['🤘🏿', '6'],
        ['🤏🏿', '7'],
        ['👉🏿', '8'],
        ['👇🏿', '9'],
        ['✋🏿', 'A'],
        ['🖐🏿', 'B'],
        ['👋🏿', 'C'],
        ['💪🏿', 'D'],
        ['🙏🏿', 'E'],
        ['🦶🏿', 'F'],
        ['👐🏾', '0'],
        ['👏🏾', '1'],
        ['👎🏾', '2'],
        ['✊🏾', '3'],
        ['🤜🏾', '4'],
        ['✌🏾', '5'],
        ['🤘🏾', '6'],
        ['🤏🏾', '7'],
        ['👉🏾', '8'],
        ['👇🏾', '9'],
        ['✋🏾', 'A'],
        ['🖐🏾', 'B'],
        ['👋🏾', 'C'],
        ['💪🏾', 'D'],
        ['🙏🏾', 'E'],
        ['🦶🏾', 'F'],
        ['👐🏽', '0'],
        ['👏🏽', '1'],
        ['👎🏽', '2'],
        ['✊🏽', '3'],
        ['🤜🏽', '4'],
        ['✌🏽', '5'],
        ['🤘🏽', '6'],
        ['🤏🏽', '7'],
        ['👉🏽', '8'],
        ['👇🏽', '9'],
        ['✋🏽', 'A'],
        ['🖐🏽', 'B'],
        ['👋🏽', 'C'],
        ['💪🏽', 'D'],
        ['🙏🏽', 'E'],
        ['🦶🏽', 'F'],
        ['👐🏼', '0'],
        ['👏🏼', '1'],
        ['👎🏼', '2'],
        ['✊🏼', '3'],
        ['🤜🏼', '4'],
        ['✌🏼', '5'],
        ['🤘🏼', '6'],
        ['🤏🏼', '7'],
        ['👉🏼', '8'],
        ['👇🏼', '9'],
        ['✋🏼', 'A'],
        ['🖐🏼', 'B'],
        ['👋🏼', 'C'],
        ['💪🏼', 'D'],
        ['🙏🏼', 'E'],
        ['🦶🏼', 'F'],
        ['👐🏻', '0'],
        ['👏🏻', '1'],
        ['👎🏻', '2'],
        ['✊🏻', '3'],
        ['🤜🏻', '4'],
        ['✌🏻', '5'],
        ['🤘🏻', '6'],
        ['🤏🏻', '7'],
        ['👉🏻', '8'],
        ['👇🏻', '9'],
        ['✋🏻', 'A'],
        ['🖐🏻', 'B'],
        ['👋🏻', 'C'],
        ['💪🏻', 'D'],
        ['🙏🏻', 'E'],
        ['🦶🏻', 'F'],
        ['👐', '0'],
        ['👏', '1'],
        ['👎', '2'],
        ['✊', '3'],
        ['🤜', '4'],
        ['✌️', '5'],
        ['🤘', '6'],
        ['🤏', '7'],
        ['👉', '8'],
        ['👇', '9'],
        ['✋', 'A'],
        ['🖐', 'B'],
        ['👋', 'C'],
        ['💪', 'D'],
        ['🙏', 'E'],
        ['🦶', 'F'],
        ['🤲🏿', '0'],
        ['🙌🏿', '1'],
        ['👍🏿', '2'],
        ['👊🏿', '3'],
        ['🤛🏿', '4'],
        ['🤞🏿', '5'],
        ['🤟🏿', '6'],
        ['👌🏿', '7'],
        ['👈🏿', '8'],
        ['👆🏿', '9'],
        ['☝🏿', 'A'],
        ['🤚🏿', 'B'],
        ['🖖🏿', 'C'],
        ['🤙🏿', 'D'],
        ['🖕🏿', 'E'],
        ['✍🏿', 'F'],
        ['🤲🏾', '0'],
        ['🙌🏾', '1'],
        ['👍🏾', '2'],
        ['👊🏾', '3'],
        ['🤛🏾', '4'],
        ['🤞🏾', '5'],
        ['🤟🏾', '6'],
        ['👌🏾', '7'],
        ['👈🏾', '8'],
        ['👆🏾', '9'],
        ['☝🏾', 'A'],
        ['🤚🏾', 'B'],
        ['🖖🏾', 'C'],
        ['🤙🏾', 'D'],
        ['🖕🏾', 'E'],
        ['✍🏾', 'F'],
        ['🤲🏽', '0'],
        ['🙌🏽', '1'],
        ['👍🏽', '2'],
        ['👊🏽', '3'],
        ['🤛🏽', '4'],
        ['🤞🏽', '5'],
        ['🤟🏽', '6'],
        ['👌🏽', '7'],
        ['👈🏽', '8'],
        ['👆🏽', '9'],
        ['☝🏽', 'A'],
        ['🤚🏽', 'B'],
        ['🖖🏽', 'C'],
        ['🤙🏽', 'D'],
        ['🖕🏽', 'E'],
        ['✍🏽', 'F'],
        ['🤲🏼', '0'],
        ['🙌🏼', '1'],
        ['👍🏼', '2'],
        ['👊🏼', '3'],
        ['🤛🏼', '4'],
        ['🤞🏼', '5'],
        ['🤟🏼', '6'],
        ['👌🏼', '7'],
        ['👈🏼', '8'],
        ['👆🏼', '9'],
        ['☝🏼', 'A'],
        ['🤚🏼', 'B'],
        ['🖖🏼', 'C'],
        ['🤙🏼', 'D'],
        ['🖕🏼', 'E'],
        ['✍🏼', 'F'],
        ['🤲🏻', '0'],
        ['🙌🏻', '1'],
        ['👍🏻', '2'],
        ['👊🏻', '3'],
        ['🤛🏻', '4'],
        ['🤞🏻', '5'],
        ['🤟🏻', '6'],
        ['👌🏻', '7'],
        ['👈🏻', '8'],
        ['👆🏻', '9'],
        ['☝🏻', 'A'],
        ['🤚🏻', 'B'],
        ['🖖🏻', 'C'],
        ['🤙🏻', 'D'],
        ['🖕🏻', 'E'],
        ['✍🏻', 'F'],
        ['🤲', '0'],
        ['🙌', '1'],
        ['👍', '2'],
        ['👊', '3'],
        ['🤛', '4'],
        ['🤞', '5'],
        ['🤟', '6'],
        ['👌', '7'],
        ['👈', '8'],
        ['👆', '9'],
        ['☝️', 'A'],
        ['🤚', 'B'],
        ['🖖', 'C'],
        ['🤙', 'D'],
        ['🖕', 'E'],
        ['✍️', 'F']
    ])

    return {
        tag,
        scale,
        encryptCodebook,
        decryptCodebook
    } as CodebookInteface
}