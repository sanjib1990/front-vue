import expect from "expect";
import { mount } from "vue-test-utils";
import Project from "../src/components/Project.vue";

describe("Project", () => {
    it("Defaults to empty project list", () => {
        let wrapper = mount(Project);

        expect(wrapper.vm.projects.length).toBe(0);
    });
});