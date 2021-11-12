class ApiFeature{

    constructor(query, queryString, Product) {
        this.query = query;
        this.queryString = queryString;
        this.Product = Product;
    }

    async search() {
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword,
                $options: 'i'
            }
        } : {};

        console.log(keyword);
        this.query = await this.Product.find(keyword);
        // console.log(this.query);
        // console.log(this.query.find(
        //     { ...keyword }
        // ));
        // console.log(this.query);
        // this.query = this.query.find({ ...keyword });

        console.log("after filter...");
        console.log(this.query);
        console.log("hellll..");
        return this;

    }


}

module.exports = ApiFeature;