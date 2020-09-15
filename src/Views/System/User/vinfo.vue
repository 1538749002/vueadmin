<template>
  <el-dialog
    :title="info.isAdd ? '添加管理员':'修改角色管理员'"
    @close="cancel"
    :visible.sync="info.isShow"
    width="40%"
  >
    <!-- 表单 -->
    <el-form :model="forminfo" ref="form" :rules="rules" label-width="140px">
      <el-form-item label="管理员角色" prop="roleid">
        <el-select v-model="forminfo.roleid" placeholder="请选择角色">
          <el-option
            v-for="item in rolelist"
            :key="item.id"
            :label="item.rolename"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="管理员名称" prop="username">
        <el-input v-model="forminfo.username" placeholder="请输入管理员名称"></el-input>
      </el-form-item>
         <el-form-item label="管理员密码" prop="password">
        <el-input v-model="forminfo.password" :placeholder="info.isAdd ?'请输入管理员密码':'留空表示不修改'"></el-input>
      </el-form-item>
      <el-form-item label="管理员状态">
        <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
      </el-form-item>
      <el-form-item label>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { addUser, editUser } from "@/request/user";
import { mapGetters, mapActions } from "vuex";
let defaultItem = {
  roleid: "",
  username: "",
  password: "",
  status: "1"
};
let resetItem = { ...defaultItem };
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isAdd: true,
          isShow: false
        };
      }
    }
  },
  data() {
    return {
      forminfo: { ...defaultItem },
      rules: {
        roleid: [{ required: true, message: "必填!", trigger: "blur" }],
        username: [{ required: true, message: "必填!", trigger: "blur" }]
      },
      checkStrictly: false
    };
  },
  computed: {
    ...mapGetters({
      rolelist: "role/rolelist"
    })
  },
  mounted() {
    if (!this.rolelist.length) {
      this.get_role_list();
    }
  },

  created() {},
  methods: {
    ...mapActions({
      get_role_list: "role/get_role_list",
      get_user_list: "user/get_user_list"
    }),
    setinfo(val) {
      val.password = ""
      defaultItem = { ...val };
      this.forminfo = { ...val };
    },

    // 表单验证
    async submit() {
      if (this.isAdd && !this.forminfo.password) {
        this.$message.warning("请输入密码");
        return;
      }

      this.$refs.form.validate(async valid => {
        if (valid) {
          let res;
          if (this.info.isAdd) {
            res = await addUser(this.forminfo);
          } else {
            res = await editUser(this.forminfo);
          }
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.info.isShow = false;
            this.get_user_list();
            this.cancel();
          } else {
            this.$message.error(res.msg);
          }
        }
      });
    },
    reset() {
      if (this.info.isAdd) {
        //添加时候的重置
        this.forminfo = { ...resetItem };
        // this.$refs.tree.setCheckedKeys([]);
      } else {
        this.setinfo({ ...defaultItem }); //修改时的重置i
      }
    },
    cancel() {
      // this.$refs.tree.setCheckedKeys([]);
      this.forminfo = { ...resetItem };
    }
  },

  components: {}
};
</script>
<style scoped>
</style>