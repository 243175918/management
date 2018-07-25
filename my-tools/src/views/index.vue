<template>
    <div class="index">
        <!--搜索条件-->
        <el-row type="flex" class="row-bg" justify="center" style="padding-bottom: 40px;">
            <el-col :span="20">
                <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state3"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入分类/控件名"
                        @select="handleSelect">
                    <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                    </template>
                </el-autocomplete>
                <el-button type="primary" style="float: right" @click="release()">发布</el-button>
            </el-col>
        </el-row>
        <!--表格-->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="20">
                <template>
                    <el-table
                            :data="tableData"
                            stripe
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="type"
                                label="分类"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="控件名">
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                            style="float: right;padding: 20px 0">
                    </el-pagination>
                </template>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                restaurants: [],
                state3: '',
                tableData: [{
                    type: 'js',
                    name: '时间格式化'
                }, {
                    type: 'html',
                    name: '下拉框'
                }, {
                    type: 'css',
                    name: '按钮'
                }, {
                    type: 'js',
                    name: '时间格式化'
                }]
            };
        },
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                ];
            },
            handleSelect(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            },
            release() {
                this.$router.push(
                    { name: 'release'}
                )
            },
            handleClick () {
                this.$router.push(
                    { name: 'details'}
                )
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style>
    .index {
        padding: 50px 0;
    }
</style>
