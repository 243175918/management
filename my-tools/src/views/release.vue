<template>
    <div class="release">
        <el-form ref="form" :model="form" label-width="80px">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="10">
                    <el-form-item label="分类">
                        <el-select v-model="form.type" placeholder="请选择活动区域">
                            <el-option label="js" value="js"></el-option>
                            <el-option label="html" value="html"></el-option>
                            <el-option label="css" value="css"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="控件名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <el-form-item label="代码">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <el-form-item label="描述">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <el-form-item label="链接网址">
                        <el-input v-model="form.url"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20" style="text-align: center">
                    <el-button type="primary">发布</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    type: '',
                    url: '',
                    desc: ''
                }
            }
        }
    }
</script>

<style>
    .release {
        padding: 50px 0;
    }
    .release .el-textarea__inner {
        height: 150px;
    }

</style>
