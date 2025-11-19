type ProductStatus = 'ready' | 'sold' | boolean;

export class StatusHelper {
    static getStatus(isReady: boolean): 'ready' | 'sold' {
        return isReady ? 'ready' : 'sold';
    }

    static getBoolean(status: ProductStatus): boolean {
        if (typeof status === 'boolean') return status;
        return status === 'ready';
    }

    static isValidStatus(status: any): status is ProductStatus {
        return status === 'ready' || status === 'sold' || typeof status === 'boolean';
    }

    static isReady(status: ProductStatus): boolean {
        if (typeof status === 'boolean') return status;
        return status === 'ready';
    }

    static isSold(status: ProductStatus): boolean {
        if (typeof status === 'boolean') return !status;
        return status === 'sold';
    }

    // Untuk display di UI
    static getDisplayText(status: ProductStatus): string {
        if (this.isReady(status)) return 'Tersedia';
        return 'Terjual';
    }

    // Untuk styling
    static getStatusColor(status: ProductStatus): string {
        if (this.isReady(status)) return 'green';
        return 'red';
    }

    static getStatusVariant(status: ProductStatus): 'success' | 'danger' {
        if (this.isReady(status)) return 'success';
        return 'danger';
    }
}
export default StatusHelper;