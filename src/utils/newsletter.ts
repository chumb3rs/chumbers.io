export interface NewsletterFormElements {
    submitButton: HTMLButtonElement;
    buttonText?: HTMLSpanElement;
    buttonLoading?: HTMLSpanElement;
    inputs: HTMLInputElement[];
    messageContainer?: HTMLDivElement;
}

export function setLoading(
    elements: NewsletterFormElements,
    isLoading: boolean,
) {
    elements.submitButton.disabled = isLoading;
    elements.inputs.forEach((input) => (input.disabled = isLoading));

    if (elements.buttonText && elements.buttonLoading) {
        if (isLoading) {
            elements.buttonText.classList.add('hidden');
            elements.buttonLoading.classList.remove('hidden');
        } else {
            elements.buttonText.classList.remove('hidden');
            elements.buttonLoading.classList.add('hidden');
        }
    }
}

export function showMessage(
    elements: NewsletterFormElements,
    message: string,
    type: 'success' | 'error',
) {
    if (!elements.messageContainer) return;

    elements.messageContainer.textContent = message;
    elements.messageContainer.classList.remove(
        'hidden',
        'bg-green-50',
        'text-green-800',
        'bg-red-50',
        'text-red-800',
    );

    if (type === 'success') {
        elements.messageContainer.classList.add(
            'bg-green-50',
            'text-green-800',
        );
    } else {
        elements.messageContainer.classList.add('bg-red-50', 'text-red-800');
    }

    setTimeout(() => {
        elements.messageContainer?.classList.add('hidden');
    }, 5000);
}

export async function handleNewsletterSubmit(
    form: HTMLFormElement,
    elements: NewsletterFormElements,
): Promise<void> {
    const formData = new FormData(form);

    setLoading(elements, true);
    elements.messageContainer?.classList.add('hidden');

    try {
        const res = await fetch('/api/subscribe', {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();

        if (res.ok) {
            showMessage(
                elements,
                data.msg || 'Successfully subscribed!',
                'success',
            );
            form.reset();
        } else {
            showMessage(elements, data.msg || 'Subscription failed.', 'error');
        }
    } catch (error) {
        console.error('Subscription error:', error);
        showMessage(
            elements,
            'Something went wrong. Please try again.',
            'error',
        );
    } finally {
        setLoading(elements, false);
    }
}
