<template>
    <div class="main">
        <el-carousel indicator-position="none" :autoplay="false">
            <el-carousel-item v-for="item in 4" :key="item">
                <el-row :gutter="56">
                    <el-col :span="8">
                        <h3>{{ item }}</h3>
                    </el-col>
                    <el-col :span="8">
                        <h3>{{ item }}</h3>
                    </el-col>
                    <el-col :span="8">
                        <h3>{{ item }}</h3>
                    </el-col>
                </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'abc'
        }
    },
    beforeCreate() {
        function Foo(name) {
            this.name = name
        }
        Foo.prototype.myName = function () {
            console.log(this.name)
        }
        function Bar(name, label) {
            Foo.call(this, name)
            this.label = label
        }
        Bar.prototype = Object.create(Foo.prototype)
        // Bar.prototype = new Foo()

        Bar.prototype.myLabel = function () {
            console.log(this.label)
        }

        var a = new Bar('a', 'obj a')

        console.log(a.__proto__ === Bar.prototype)

        a.myName()
        a.myLabel()
    },
    created() {
        var obj = {
            a: 1,
            b: function () {
                console.log(this)
            }
        }
        var fun = obj.b
        fun()
    },
    methods: {
        flat(arr) {
            console.log(arr.flat(Infinity))
        }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) h3 {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) h3 {
    background-color: #d3dce6;
}
</style>
